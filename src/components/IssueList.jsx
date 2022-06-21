import React, { useEffect, useState } from 'react'
import Issue from './Issue'
import styles from './IssueList.module.css'

function IssueList() {
    const [issues, setIssues] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/repos/facebook/create-react-app/issues')
            .then(res => res.json())
            .then(data => setIssues(data))
    }, [])

    return (
        <div className={styles.issueList}>
            {
                issues.map(issue => {
                    return <Issue key={issue.id} issue={issue} />
                })
            }
        </div>
    )
}

export default IssueList