import React from 'react'
import PropTypes from 'prop-types'
import styles from './Issue.module.css'

function Issue(props) {
    const { title, user, number, created_at } = props.issue
    const formattedDate = new Date(created_at)

    return (
        <div className={styles.issue}>
            <h4><a href="#issue">{title}</a></h4>
            <div className={styles.issueMeta}>
                #{number} opened at {formattedDate.toLocaleString()} by <a href={user.html_url}>{user.login}</a>
            </div>
        </div>
    )
}

Issue.propTypes = {
    issue: PropTypes.object
}

export default Issue


// https://digitalcrafts.instructure.com/courses/193/assignments/5201?module_item_id=26862
// https://github.com/DigitalCraftsStudents/web-ft-2022-04/blob/main/5-frontend-frameworks/02-react-ecosystem/01-styling-in-react/01-github-issues-clone/src/components/IssueList.js
// https://api.github.com/repos/facebook/create-react-app/issues
// https://github.com/facebook/create-react-app/issues