const fs = require('node:fs');

function updateImagePath(filename) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);  // TODO: 마크 다운 문서 수정
        data.replace('helli', 'z');
    })
}

const options = {
    encoding: 'utf8',
    withFileTypes: true,
    recursive: true,
};

fs.readdir(__dirname, options, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }
    // Update image path for markdown file
    files.forEach(file => {
        if (file.name.endsWith('.md')) {
            updateImagePath(file.path + '/' + file.name);
        }
    })
    // .img 파일 옮기기
})

// 현재 디렉토리에서 파일 목록 읽어오기
// 각 파일 목록에 대해서 변환 함수 호출
// 각 디렉토리에서 재귀적으로 호출


