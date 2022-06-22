import React, { useEffect, useState } from 'react'
import styles from './Label.module.css'

function Labels() {
    const [labels, setLabels] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/repos/facebook/create-react-app/labels')
            .then(res => res.json())
            .then(data => setLabels(data))
    }, [])

    return (
        <div className={styles.labels}>
            {
                labels.map(label => {
                    return <Labels key={label.id} label={label} />
                })
            }
        </div>
    )
}

export default Labels