const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const documentText = "<!DOCTYPE html><div id='root'><span>1</span><span><a>2</a><a>3</a><a>4</a></span></div>";
const dom = new JSDOM(documentText.trim());


const getElement = function(element) {
    return dom.window.document.querySelector(element);
}

const getChild = function(child){
    const children = child.parentNode.children;
    let i = 0;

    for (; i < children.length; ++i){
        if (child == children[i]){
            switch (i) {
                case 0:
                return ':first-child';
        
                case children.length - 1:
                return ':last-child';
    
                default:
                i++;
                return':nth-child(' + i + ')';
            }
        }
    }
};

const getPath = function(node) {
    let path = '';
    const index = getChild(node);

        path = node.nodeName + getChild(node);

    node = node.parentNode;

    while(node.parentNode.parentNode != null) {
        path = node.nodeName + getChild(node) + '>' + path;
        node = node.parentNode;
    }

    path = 'HTML>' + path;

    return path;
    };

const node = getElement('A:nth-child(2)');

console.log(getPath(node));
console.log(dom.window.document.querySelector(getPath(node)).textContent);
