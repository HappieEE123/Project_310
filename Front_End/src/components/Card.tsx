import './Card.css';
import {IonAvatar, IonCard, IonCardContent, IonCardSubtitle, IonIcon, IonItem, IonLabel} from '@ionic/react';
import {chatboxEllipsesOutline, thumbsUpOutline} from 'ionicons/icons';
import { CommentSection} from 'react-comments-section'

import {faker} from '@faker-js/faker';
import React, {useState} from "react";
import axios from "axios";

interface Props {
    postData?: any
    // any props that come into the component
}

const Card = ({postData}: Props) => {
    const [showComments, setShowComments] = useState(false);

    const UNIX2String = (unixTime: number) => {
        const date = new Date(unixTime * 1000);
        return date.toLocaleDateString()
    }

    const addLikes = (postId: number) => {
        axios.post('https://api.weasoft.com/likes', {
            postId
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const data = [
        {
            userId: '02b',
            comId: '017',
            fullName: 'Lily',
            userProfile: 'https://www.linkedin.com/in/riya-negi-8879631a9/',
            text: 'I think you have a point🤔',
            avatarUrl: 'https://ui-avatars.com/api/name=Lily&background=random',
            replies: []
        }
    ]

    return (
        <IonCard>
            <IonCardContent>
                <IonItem class="no_border">
                    <IonAvatar slot="start">
                        <img id="avatar" src={faker.image.avatar()} alt={`${faker.name.firstName}'s Avatar`}/>
                    </IonAvatar>
                    <IonLabel>
                        <IonCardSubtitle>{faker.name.firstName().slice(0, 5)}_{faker.name.lastName().slice(0, 5)}{Math.round(Math.random() * 100)}</IonCardSubtitle>
                        <p>{UNIX2String(postData.date)}</p>
                    </IonLabel>
                    {/* <div className="chip">
                        <div className='filledChip'> */}
                    <div className="chip"
                         style={{backgroundImage: "url('/assets/a.jpg')", backgroundSize: "100% 100%"}}>
                        <IonLabel color="primary"
                                  style={{fontSize: "small"}}><b>{postData.happiness + "% Happy"}</b></IonLabel>
                    </div>
                    {/* </div>
                    </div> */}
                </IonItem>

                <img src={`https://api.weasoft.com/imgs/${postData.id}`}/>
                {/* <div style={{backgroundColor:"red"}}>................</div> */}
                <div>
                    {/* <img id="avatar" src={faker.image.avatar()}/> */}
                </div>
                <br/>
                {postData.description}.
                <br/>
                <br/>
                {/* <div className='likeContainer'><div className="Like"><IonIcon icon={thumbsUpOutline}></IonIcon>{Math.round(Math.random() * 100)}</div></div>
                <div className='likeContainer'><div className="Comment"><IonIcon icon={chatboxEllipsesOutline}></IonIcon>{Math.round(Math.random() * 10)}</div></div> */}
                {/* <IonCardContent style="font-size:18px;font-weight:bold;" id="mycard"> */}
                <IonIcon icon={thumbsUpOutline}
                         onClick={() => addLikes(postData.id)}
                         style={{cursor: 'pointer'}}>
                </IonIcon>
                {postData.likesCount} &nbsp;
                <IonIcon icon={chatboxEllipsesOutline}
                         onClick={() => setShowComments(!showComments)}
                         style={{cursor: 'pointer'}}>
                </IonIcon>
                {showComments ?
                    <CommentSection
                        currentUser={{
                            currentUserId: '01a',
                            currentUserImg:
                                'https://ui-avatars.com/api/name=Riya&background=random',
                            currentUserProfile:
                                'https://www.linkedin.com/in/riya-negi-8879631a9/',
                            currentUserFullName: 'Riya Negi'
                        }}
                        logIn={{
                            loginLink: 'http://localhost:3001/',
                            signupLink: 'http://localhost:3001/'
                        }}
                        commentData={data}
                        onSubmitAction={(data: {
                            userId: string
                            comId: string
                            avatarUrl: string
                            userProfile?: string
                            fullName: string
                            text: string
                            replies: any
                            commentId: string
                        }) => console.log('check submit, ', data)}
                        currentData={(data: any) => {
                            console.log('current data', data)
                        }}
                    /> : null}
                {Math.round(Math.random() * 50)} &nbsp;
                {/* <IonIcon icon={bookmarkOutline}></IonIcon> {Math.round(Math.random()*50)} &nbsp; */}
                <span style={{float: "right", fontSize: "20px"}}>
                    <IonIcon name="paper-plane-outline"/>
                </span>
            </IonCardContent>
            {/* </IonCardContent> */}
        </IonCard>
    );
};

export default Card;
