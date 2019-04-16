import React from 'react';


class parent extends React.Component {
    

    render() {
        let { parent } = this.props
        return (
            <div>
                {parent.expense} <br/>
                {parent.parent.first_name}
            </div>
        );
    }
}





export default parent;
