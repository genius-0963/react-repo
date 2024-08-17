function customRender(reactElement , container ){
    const domElement = document.createElement 
    (reactElement.type)
    domElement.innerHtml = reactElement.children
    domElement.setAttribute ('herf' , reactElement.props.href)
    domElement.setAttribute('target' , reactElement.props.target)
    container.appendChild(domElement)
}


const rectElement = {
    type: 'a',
    props : {
        href :  'www.google.com ',
        target : '_blank'
    },
    children :  'click me to visit google'

}

const mainContainer = document.querySelector('#root')

