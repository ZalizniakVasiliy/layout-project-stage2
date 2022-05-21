const {src, dest, parallel} = require('gulp');

const copyComponentName1Scss = () => {
    return src('dist/scss/components/component-name1/index.scss')
        .pipe(dest('build/styleComponentsParallel'));
};

const copyComponentName2Scss = () => {
    return src('dist/scss/components/component-name2/index.scss')
        .pipe(dest('build/styleComponentsParallel'));
};

exports.copyComponentsIndexStyle = parallel(copyComponentName1Scss, copyComponentName2Scss);


const copyOneComponentScss = () => {
    return src('dist/scss/components/component-name1/*.scss')
        .pipe(dest('build/styleComponent1'));
};

exports.copyAllScssComponent1 = copyOneComponentScss;


const copyAllFilesScss = () => {
    return src('dist/**/*.scss')
        .pipe(dest('build/styleAllScss'));
};

exports.copyAllScss = copyAllFilesScss;


const copyComponentsScss = () => {
    return src(['dist/**/*.scss', '!dist/scss/common/**'])
        .pipe(dest('build/styleAllComponentsScss'));
};

exports.copyComponents = copyComponentsScss;