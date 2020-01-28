import React,{ Component} from 'react';
import Axios from 'axios';
class Api extends Component{

    constructor(props) {
        super(props);

        this.state = {
            // posts: [
            //     {title: 'Статья 1', content: 'содержание статьи 1'},
            //     {title: 'Статья 2', content: 'содержание статьи 2'},
            //     {title: 'Статья 3', content: 'содержание статьи 3'},
            //     {title: 'Статья 4', content: 'содержание статьи 4'},
            //
            //
            // ],
            posts : [this.getPosts]

        };
    }


    getPosts = () =>{
        const result = [
            {title: 'Статья 1', content: 'содержание статьи 1'},
            {title: 'Статья 2', content: 'содержание статьи 2'},
            {title: 'Статья 3', content: 'содержание статьи 3'},
            {title: 'Статья 4', content: 'содержание статьи 4'}
            ];
      //  console.log('getPosts');

         const x = Axios.get('http://wp.loc/wp-json/wp/v2/posts').then(function(response) {

            const r = response.data;
          //  console.log(r);

            var xx = r.map((post, index) => {
            //    console.log(post.id);
                 result.push({ title : post.title.rendered, content : post.content.rendered})
return result;
            });
            console.log(xx);
            return result;
        });

         console.log(x);
        return x;
    }



    render(){

        return (

            <div>

                { this.state.posts.map((post,index)=>{
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