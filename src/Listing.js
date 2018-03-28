import React, { Component } from 'react'; 
import { Card } from 'antd';
const { Meta } = Card;

class Listing extends Component {
    render() {
        return(
            <div className="listing-item" >
                <Card
                    bodyStyle={{minHeight:'115px'}}
                    cover={<img alt={this.props.listing.name} 
                    src={this.props.listing.primary_photo_css_url_small} />}
                >
                    <Meta
                    title={this.props.listing.name}
                    description={this.props.listing.address}
                    />
                </Card>
            </div>
        )
    }
}

export default Listing;