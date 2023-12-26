function customeRender(reactelement,container){
   /*
   const domElement = document.createElement(reactelement.type)
   domElement.innerHTML = reactelement.childern
   domElement.setAttribute('href',reactelement.props.href)
   domElement.setAttribute('target',reactelement.props.target)
   container.appendchild(domElement)
   */
   const domElement = document.createElement(reactelement.type)
   domElement.innerHTML = reactelement.childern
   for (const prop in reactelement.props) {
    if (prop === 'children') continue
     domElement.setAttribute(prop,reactelement.props)
    
   }
   container.appendChild(domElement)
}

const reactelement={
    type: 'a',
    props: {
        href:"https://google.com",
        target: '_blank'
    },
    childern : 'click me to visit google'
}
const mainContainer = document.querySelector('#root')
customeRender(reactelement,mainContainer)