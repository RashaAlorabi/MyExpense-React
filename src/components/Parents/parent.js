import React from 'react';


class parent extends React.Component {
    render() {
        let { parent } = this.props
        return (
           <li class="list-group-item">{`${parent.parent.first_name} ${parent.parent.last_name}`}</li>
        );
    }
}
export default parent;

// expense: 1000
// id: 4
// image: "http://127.0.0.1:8000/media/parent_image/IMG_0584_IKJ0jXX.jpg"
// parent:
// email: "almteref@gmail.com"
// first_name: "Fahad Bader"
// id: 2
// last_name: "Almtere"
// username: "fahadb"