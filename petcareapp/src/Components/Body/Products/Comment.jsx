import cs from './productDetail.module.css';
import avaUser from '../../../assests/ava/userCommentAva.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faThumbsUp, faThumbsDown   } from '@fortawesome/free-solid-svg-icons';

export default function Comment({ data }) {
    const { commentDate, commentDescription, fullName, commentId } = data;

    return (
        <div className={cs['comment_wrap']}>
            <div className={cs['avaUser_wrap']}>
                <FontAwesomeIcon icon={faUser} className={cs['avaImg']} />
            </div>
            <div className={cs['userDetail_wrap']}>
                <div className={cs['userDetail_top']}>
                    <h4>{fullName}</h4>
                    <span className={cs['comment_date']}>{commentDate.toString()}</span>
                </div>

                <div className={cs['userDetail_DescriptionWrap']}>
                    <p className={cs['userDetail_Description']}>{commentDescription} </p>
                </div>
                {/* <div className={cs['react-reply']}>
                    <div className={cs['like']}>
                        <FontAwesomeIcon icon={faThumbsUp} className={cs['icon']} />
                        48
                    </div>
                    <div className={cs['dislike']}>
                    <FontAwesomeIcon icon={faThumbsDown} className={cs['icon']}/>
                        2
                    </div>
                    <p className={cs['reply']}>Reply</p>
                </div> */}
            </div>
        </div>
    );
}
