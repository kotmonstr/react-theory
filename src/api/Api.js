import React, {Component} from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

class Api extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        this.getPosts();
    }

    getPosts = async () => {
        const posts = [];

        let queryrResult = await axios.get('http://sevgaz.loc/wp-json/wp/v2/posts').then(function (response) {
            return response.data
        });
        queryrResult.map((post, index) => {

           // const image = this.getImageById(post.id);
            const image = '';
            posts.push({title: post.title.rendered, content: post.content.rendered, id: post.id , image: image})
        });
        this.setState({
            posts
        });
    };

    getImageById = async(postId) =>{
        let queryrResult = await axios.get('http://sevgaz.loc/wp-json/wp/v2/media?parent='+ postId).then(function (response) {
            return response.data
        });

        queryrResult.map((post, index) => {

            console.log(post);
            return ({image: post.id})
        });

    }






    render() {
        console.log(this.state.posts);

        return (
            <div>
                {
                    this.state.posts.map((post, index) => {
                        return (
                            <Card  key={index} >
                                <Card.Body  >
                                    <h1>{post.title}</h1>
                                    <p>ID: {post.id}</p>
                                    <p dangerouslySetInnerHTML={{ __html: post.content }} ></p>
                                </Card.Body>
                            </Card>

                        )
                    })
                }
            </div>
        );
    }
}

export default Api;