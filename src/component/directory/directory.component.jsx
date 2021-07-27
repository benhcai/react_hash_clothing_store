import React from "react";
import sections from "./directory.data.json";
import MenuItem from "../../component/menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: sections,
    };
  }

  render() {
    console.log(this.state.sections);
    return (
      <div className="directory-menu">
        {/* Destructure first */}
        {this.state.sections.map(({ title, id, imageUrl, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
