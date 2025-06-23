import { Fragment } from "react/jsx-runtime";
function MultipleComponent(){
    return(
        <>
         <WelcomeText/>
         <Text/>
         Text :<Text />
        </>
    )
}

function Text(){
    return <h1>This is a text</h1>
}

function WelcomeText(){
    return <h1>Welcome, User</h1>
}

const posts = [
  { id: 1, title: 'First Post', body: 'Hello world' },
  { id: 2, title: 'Second Post', body: 'React is great!' }
];

function FragmentComponet(){
    return(
        posts.map(post =>
            <Fragment key={post.id}>
                <p>{post.title} - <span> {post.body}</span></p>
            </Fragment>
        )
    )
}
export {MultipleComponent,FragmentComponet};