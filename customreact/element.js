function customrender(reactelement, maincontainer) {
    if (!maincontainer) {
      console.error("Main container not found!");
      return;
    }
  
    // Create a DOM element based on the type
    const domelement = document.createElement(reactelement.type);
  
    // Set inner HTML for the element
    domelement.innerHTML = reactelement.children;
  
    // Set attributes from props dynamically
    for (const prop in reactelement.props) {
      domelement.setAttribute(prop, reactelement.props[prop]);
    }
  
    // Append the created element to the main container
    maincontainer.appendChild(domelement);
  }
  
  const reactelement = {
    type: "a",
    props: {
      href: "https://google.com",
      target: "_blank",
    },
    children: "Click here to visit Google",
  };
  
  // Select the main container (assuming 'root' is an ID)
  const maincontainer = document.querySelector("#root");
  
  customrender(reactelement, maincontainer);
  