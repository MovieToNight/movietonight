import React, { Component } from 'react'
import {Button, Embed, Header, Icon, Modal} from 'semantic-ui-react'

class VideoPopup extends Component {

    state = { modalOpen: false }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

    render() {
        return (
            <Modal
                trigger={<Button icon={'play'} content={'Trailer'} onClick={this.handleOpen}/>}
                open={this.state.modalOpen}
                onClose={this.handleClose}
                size='small'>

                <Header icon='browser' content='Movie Trailer' />
                <Modal.Content>
                    <Embed

                        autoplay={false}
                        color='white'
                        hd={false}
                        id='-AJ7cLi1Jfk'
                        iframe={{
                            allowFullScreen: true,
                            style: {
                                padding: 1,
                            },
                        }}
                        placeholder='/images/image-16by9.png'
                        source='youtube'
                    />
                </Modal.Content>
                <Modal.Actions>
                    <Button color='green' onClick={this.handleClose} inverted>
                        <Icon name='checkmark' /> Close
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default VideoPopup;
