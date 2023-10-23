<template>
    <div class="admin-ckeditor" :style="{ '--ckHeight': height }">
        <div :id="domId"></div>
    </div>
</template>

<script>
// Using this component in a traditional way:

// <ckEditor ref="xxx"></ckEditor>
// this.$refs.xxx.curEditor.getData()
// this.$refs.xxx.curEditor.setData('your content')

// Using this component with v-model:
// <ckEditor v-model="editorData" height="400px"></ckEditor>

export default {
    name: 'vc-ckeditor',
    props: {
        value: {
            type: String,
            default: ''
        },
        height: {
            type: String,
            default: '400px'
        }
    },
    data() {
        return {
            domId: `cke${Date.now()}`,
            curEditor: null,
            editorConfig: {
                // https://ckeditor.com/docs/ckeditor5/latest/features/toolbar/toolbar.html#extended-toolbar-configuration-format
                toolbar: {
                    items: [
                        'undo', 'redo',
                        '|', 'heading',
                        '|', 'bold', 'italic', 'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor',
                        '|', 'lineHeight', 'alignment', 'bulletedList', 'numberedList', 'outdent', 'indent',
                        '|', 'blockQuote', 'link', 'horizontalLine', 'insertTable', 'sourceEditing',
                    ],
                    shouldNotGroupWhenFull: false
                },
                // Changing the language of the interface requires loading the language file using the <script> tag.
                language: this.$i18n.locale === 'zh-tw' ? 'zh' : this.$i18n.locale,
                list: {
                    properties: {
                        styles: true,
                        startIndex: true,
                        reversed: true
                    }
                },
                // https://ckeditor.com/docs/ckeditor5/latest/features/headings.html#configuration
                heading: {
                    options: [
                        { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                        { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                        { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
                        { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
                        { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
                        { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
                        { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' }
                    ]
                },
                // https://ckeditor.com/docs/ckeditor5/latest/features/editor-placeholder.html#using-the-editor-configuration
                placeholder: '',
                // https://ckeditor.com/docs/ckeditor5/latest/features/font.html#configuring-the-font-family-feature
                fontFamily: {
                    options: [
                        "黑体",
                        "仿宋",
                        "楷体",
                        "标楷体",
                        "华文仿宋",
                        "华文楷体",
                        "宋体",
                        "微软雅黑",
                        "Arial",
                        "Tahoma",
                        "Verdana",
                        "Times New Roman",
                        "Courier New",
                        "Open Sans",
                        "SourceHanSansCN",
                    ],
                    supportAllValues: true
                },
                // https://ckeditor.com/docs/ckeditor5/latest/features/font.html#configuring-the-font-size-feature
                fontSize: {
                    options: [8, 10, 12, 14, 16, 18, 20, 22, 24, 36],
                    supportAllValues: true
                },
                // Be careful with the setting below. It instructs CKEditor to accept ALL HTML markup.
                // https://ckeditor.com/docs/ckeditor5/latest/features/general-html-support.html#enabling-all-html-features
                htmlSupport: {
                    allow: [
                        {
                            name: /.*/,
                            attributes: true,
                            classes: true,
                            styles: true
                        }
                    ]
                },
                // Be careful with enabling previews
                // https://ckeditor.com/docs/ckeditor5/latest/features/html-embed.html#content-previews
                htmlEmbed: {
                    showPreviews: true
                },
                // https://ckeditor.com/docs/ckeditor5/latest/features/link.html#custom-link-attributes-decorators
                link: {
                    decorators: {
                        addTargetToExternalLinks: true,
                        defaultProtocol: 'https://',
                        toggleDownloadable: {
                            mode: 'manual',
                            label: 'Downloadable',
                            attributes: {
                                download: 'file'
                            }
                        }
                    }
                },

            }
        }
    },
    mounted() {
        // 只初始化一次执行队列
        if (!window.exeStack) window.exeStack = []
        this.insertScript()
    },
    methods: {
        // 加载打包后的ckeditor,包括了必要的插件
        insertScript() {
            // 如果ckeditor.js没有加载
            if (!window.isCkeditorLoaded) {

                // 这时候需要把初始化函数推到一个队列里
                window.exeStack.push(this.initCKEditor)

                // 开头肯定没有这个script标签，下面的逻辑只执行一次
                // 执行完后，就有这个script标签了，所以，不可能执行第二次
                if (!document.querySelector('.ckEditorScript')) {
                    let scriptDom = document.createElement('script')
                    scriptDom.src = this.$store.getters.cdnHostAndVersionPath + "/static/scripts/ckeditor/ckeditor.js"
                    scriptDom.classList.add('ckEditorScript')
                    // 这时候html里就有这个script标签了
                    document.head.appendChild(scriptDom)

                    // 第一次执行的时候，绑定onload事件，因为外层只执行一次，所以onload事件也只执行一次            
                    scriptDom.onload = () => {
                        // 一旦脚本下载下来，标记全局变量，这样最外层的if判断就只执行else分支了
                        window.isCkeditorLoaded = true
                        // 一次性执行下方的执行队列
                        window.exeStack.forEach(func => func())
                    }
                }
            } else {
                // 如果已经加载了，就直接初始化实例
                this.initCKEditor()
            }
        },
        // 初始化CKEditor
        initCKEditor() {
            // 根据全局配置对象，初始化编辑器实例
            ClassicEditor.create(document.getElementById(this.domId), this.editorConfig).then(editor => {
                // 缓存当前实例
                this.curEditor = editor
                // 注入编辑页面数据
                editor.setData(this.value)
                // 监听数据变化，实时释放给父级组件，使用默认的input事件
                editor.model.document.on('change:data', () => {
                    this.$emit('input', editor.getData())
                });
            }).catch(error => {
                console.error(error);
            });
        },
        // 切换语言【支持多语的逻辑】
        changeLang(lang) {
            let _lang = lang === 'zh-tw' ? 'zh' : lang
            // 缓存编辑器已输入的内容
            let savedData = this.curEditor.getData()
            // 设置语言
            this.editorConfig.language = _lang;
            // 重新创建编辑器实例
            this.curEditor.destroy()
                .then(() => ClassicEditor.create(document.getElementById(this.domId), this.editorConfig))
                .then(newEditor => {
                    this.curEditor = newEditor
                    newEditor.setData(savedData)
                })
                .catch(error => console.error(error));
        },
    },
    watch: {
        // 监听全局语言变化
        "$i18n.locale": function (n, o) {
            if (n !== o) this.changeLang(n)
        }
    },
} 
</script>

<style lang="scss" scoped>
// 隐藏右下角poweredby标识
.admin-ckeditor::v-deep .ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_border] {
    display: none;
}

.admin-ckeditor::v-deep .ck-content {
    height: var(--ckHeight);
}

// 编辑框文字颜色
.admin-ckeditor::v-deep .ck-editor__main {
    color: #000;
    height: var(--ckHeight);
}

// 源代码编辑框样式
.admin-ckeditor::v-deep .ck-source-editing-area {
    min-height: var(--ckHeight);
}

.admin-ckeditor::v-deep .ck-source-editing-area textarea {
    background-color: #fff;
}
</style>
