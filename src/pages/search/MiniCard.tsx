import { colorTheme } from "constant/colorTheme"
import { truncate } from 'functions/StringManupulation'
import { responseItemType } from 'models/reposModels'
import { AiOutlineEye } from "react-icons/ai"
import { BiGitRepoForked } from "react-icons/bi"
import { GoIssueReopened } from "react-icons/go"
import { useNavigate } from 'react-router-dom'



const MiniCard = (props: responseItemType) => {
    const navigator = useNavigate();

    // handle view details...
    const handleViewDetails = () => {
        navigator(`/repositories-details/${props.name}`, { state: props })
    }

    return (
        <div className="card">
            <div className="card-header">
                <img src={props.owner.avatar_url} alt={props.full_name} />
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
                <button className="btn btn-outline-primary" onClick={handleViewDetails}>View Details</button>
            </div>
        </div>
    )
}

export default MiniCard