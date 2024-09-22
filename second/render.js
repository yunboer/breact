export default function render(element, container) {
    const node = element.type == "TEXT_ELEMENT" ? document.createTextNode("") : document.createElement(element.type);
    Object.keys(element.props).filter(prop => prop !== "children").forEach(name => {
        node[name] = element.props[name];
    });

    element.props.children.forEach(child => {
        render(child, node);
    });

    container.appendChild(node);
}