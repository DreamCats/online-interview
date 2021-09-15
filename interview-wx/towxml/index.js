const md = require('./parse/markdown/index'),
    parse = require('./parse/index')

module.exports = (str,type,option)=>{
    option = option || {};
    let result;
    switch (type) {
        case 'markdown':
            // console.log('md:',md(str))
            result = parse(md(str),option);
            console.log('md2:', result)
            
        break;
        case 'html':
            result = parse(str,option);
        break;
        default:
            throw new Error('Invalid type, only markdown and html are supported');
        break;
    };
    return result;
};
