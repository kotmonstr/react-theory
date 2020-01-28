import React,{ Component} from 'react';
import Axios from 'axios';
class Api extends Component{

    constructor(props) {
        super(props);

        this.state = {
            posts: [
                {title: 'Статья 1', content: 'содержание статьи 1'},
                {title: 'Статья 2', content: 'содержание статьи 2'},
                {title: 'Статья 3', content: 'содержание статьи 3'},
                {title: 'Статья 4', content: 'содержание статьи 4'},


            ],
            posts2 : this.getPosts()

        };
    }


    getPosts = () =>{
        var result = [
            {title: 'Статья 1', content: 'содержание статьи 1'},
            {title: 'Статья 2', content: 'содержание статьи 2'},
            {title: 'Статья 3', content: 'содержание статьи 3'},
            {title: 'Статья 4', content: 'содержание статьи 4'}
            ];
        console.log('getPosts');

        var x = Axios.get('http://wp.loc/wp-json/wp/v2/posts').then(function(response){ console.log(response.date)} );
        console.log(x);
        return result;
    };



    render(){

        return (

            <div>

                { this.state.posts2.map((post,index)=>{
                    return(
                        <div key={index}>
                            <div>
                                Title: {post.title}
                                Content: {post.content}
                            </div>
                        </div>
                    )
                })}

            </div>
        );
    }

}
export default Api;