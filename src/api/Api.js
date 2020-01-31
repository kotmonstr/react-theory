import React, {Component} from 'react';
import axios from 'axios';
import {Card, Container} from 'react-bootstrap';

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
        let posts = [];
        const queryrResult = await axios.get('http://sevgaz.loc/wp-json/wp/v2/posts').then(function (response) {
            return response.data
        });

        queryrResult.map((post, index) => {
            if(post.featured_media !==0){
                 this.getImageById(post.featured_media).then((resolve)=>{
                     posts.push({title: post.title.rendered, content: post.content.rendered, id: post.id , image: resolve})
                     this.setState({
                        posts
                     });
                });
            }else{
                posts.push({title: post.title.rendered, content: post.content.rendered, id: post.id , image: ''})
                this.setState({
                    posts
                });
            }
        });
    };

    getImageById = async(imageId) =>{
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        const imageUrl = await axios.post('http://sevgaz.loc/wp-json/wp/v2/media/'+ imageId,{
            responseType: 'json',
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
        },{ auth: {
                username: 'api',
                password: '12345'
            }}).then(function (response) {
               // console.log(response);
            return response.data.source_url
        });

        return imageUrl;
    };






    render() {

        const divStyle = {
            'padding': '20px',
            'margin': '20px'
        };
        return (

                <div className="well" style={divStyle}>
                    <Container>
                    {
                        this.state.posts.map((post, index) => {
                            return (
                                <Card  key={index} >
                                    <Card.Body>
                                        <h1>{post.title}</h1>
                                        { post.image ? <img src={post.image} width="100px" height="100px"/> : '' }
                                        <p>ID: {post.id}</p>
                                        <p dangerouslySetInnerHTML={{ __html: post.content }} ></p>
                                    </Card.Body>
                                </Card>

                            )
                        })
                    }
                    </Container>
                </div>

        );
    }
}

export default Api;