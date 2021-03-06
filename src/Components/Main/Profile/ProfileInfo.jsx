import React from 'react';
import styles from './ProfileInfo.module.css'
import Avatar from '../../../common/Avatar/Avatar';
import ProfileStatus from './ProfileStatus'


const ProfileInfo = (props) => {
    return (
        <div className={styles.profileInfo}>
            <Avatar img={props.profile.photos.large}/>
            <div className={styles.descriptions}>
                <div className={styles.aboutMe}><h3>{props.profile.fullName}</h3>
                    <ProfileStatus status={props.status}
                                   updateUserStatus={props.updateUserStatus}/>
                    <h4>{props.profile.aboutMe}</h4>
                </div>
                <div className={styles.contacts}>
                    <h3 >Contacts</h3>
                    <span>Facebook: <a href={props.profile.contacts.facebook}>
                    {props.profile.contacts.facebook}</a>
                </span>
                    <span>WebSite: <a href={props.profile.contacts.website}>
                    {props.profile.contacts.website}</a>
                </span>
                    <span>vk: <a href={props.profile.contacts.vk}>
                   {props.profile.contacts.vk} </a>
                </span>
                    <span>Twitter: <a href={props.profile.contacts.twitter}>
                    {props.profile.contacts.twitter}</a>
                </span>
                    <span>Instagram: <a href={props.profile.contacts.instagram}>
                    {props.profile.contacts.instagram}</a>
                </span>
                    <span>YouTube: <a href={props.profile.contacts.youtube}>
                   {props.profile.contacts.youtube}</a>
                </span>
                    <span>GitHub: <a href={props.profile.contacts.github}>
                    {props.profile.contacts.github}</a>
                </span></div>
            </div>
        </div>
    );
};

export default ProfileInfo;
