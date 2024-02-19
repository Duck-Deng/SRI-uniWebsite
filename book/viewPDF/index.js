// 获取要显示 PDF 的容器元素
var container = document.getElementById('pdfViewer');

// 指定 PDF 文件的 URL
var pdfUrl = 'http://127.0.0.1:5500/book/pdfjs-dist/web/compressed.tracemonkey-pldi-09.pdf';

// 使用 PDF.js 加载并显示 PDF
pdfjsLib.getDocument(pdfUrl).promise.then(function(pdfDoc) {
    // PDF 加载成功后的处理
    var numPages = pdfDoc.numPages;

    // 循环加载每一页
    for (var pageNum = 1; pageNum <= numPages; pageNum++) {
        pdfDoc.getPage(pageNum).then(function(page) {
            // 创建一个 Canvas 元素用于显示 PDF 内容
            var canvas = document.createElement('canvas');
            container.appendChild(canvas);

            // 获取 Canvas 上下文
            var context = canvas.getContext('2d');

            // 设置 Canvas 尺寸与 PDF 页面尺寸一致
            var viewport = page.getViewport({ scale: 1.5 });
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            // 渲染 PDF 内容到 Canvas
            page.render({
                canvasContext: context,
                viewport: viewport
            });
        });
    }
}).catch(function(error) {
    // 处理加载 PDF 失败的情况
    console.error('Error loading PDF:', error);
});
