import { PrettyChatWindow } from 'react-chat-engine-pretty'

function ChatsPage(props) {
    return (
        <div style={{ height: '100vh'}}>
            <PrettyChatWindow
                projectId = '4e2f3983-2557-4c8b-ad6d-a2efc6be5f73'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%'}}
            />
        </div>
      );
}

export default ChatsPage;