import { Link } from 'react-router-dom'
import { BiGitRepoForked } from "react-icons/bi"
import { GoIssueReopened } from "react-icons/go"
import { AiOutlineEye } from "react-icons/ai"
import { colorTheme } from "constant/colorTheme"
import { responseItemType } from 'models/reposType'
import { truncate } from 'functions/StringManupulation'



const MiniCard = (props: responseItemType) => {

    return (
        <div className="card">
            <div className="card-header">
                <img src='https://avatars.githubusercontent.com/u/26464369?v=4' alt='logo' />
                <div className='info'>
                    <div className="name">{truncate(props.full_name ? props.full_name : "", 30, "...")}</div>
                    <div className='other_info mt-1'>
                        <div>
                            <span><BiGitRepoForked size={18} color={colorTheme.primaryColor} /></span>
                            <span className='my_text ms-1'>{props.forks_count}</span>
                        </div>

                        <div>
                            <span><AiOutlineEye size={18} color={colorTheme.primaryColor} /></span>
                            <span className='my_text ms-1'>{props.watchers_count}</span>
                        </div>

                        <div>
                            <span><GoIssueReopened size={14} color={colorTheme.primaryColor} /></span>
                            <span className='my_text ms-1'>{props.open_issues_count}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title">Description</h5>
                <p className="card-text">{truncate(props.description ? props.description : "", 100, "...")}</p>
            </div>

            <div className="card-footer">
                <Link to={`/repositories-details/${props.name}`} className="btn btn-outline-primary">View Details</Link>
            </div>
        </div>
    )
}

export default MiniCard