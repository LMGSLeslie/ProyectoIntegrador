// in ./ResetViewsButton.js
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Button, Confirm, crudUpdateMany } from 'react-admin';

class ResetViewsButton extends Component {
    state = {
        isOpen: false,
    }

    handleClick = () => {
        this.setState({ isOpen: true });
    }

    handleDialogClose = () => {
        this.setState({ isOpen: false });
    };

    handleConfirm = () => {
        const { basePath, crudUpdateMany, resource, selectedIds } = this.props;
        crudUpdateMany(resource, selectedIds, { views: 0 }, basePath);
        this.setState({ isOpen: true });
    };

    render() {
        return (
            <Fragment>
                <Button label="Reset Views" onClick={this.handleClick} />
                <Confirm
                    isOpen={this.state.isOpen}
                    title="Update View Count"
                    content="Are you sure you want to reset the views for these items?"
                    onConfirm={this.handleConfirm}
                    onClose={this.handleDialogClose}
                />
            </Fragment>
        );
    }
}

export default connect(undefined, { crudUpdateMany })(ResetViewsButton);
