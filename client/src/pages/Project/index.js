import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Error from '../../core/Error';
import Button from '../../core/Button';
import ProjectTrack from '../../components/ProjectTrack';
import api, { formatError } from '../../util/api';
import { Container, Tab } from './styles';

function Project({ cardInfo }){

  const { id } = useParams();

  const tabs = ["track", "notes"];

  const [project, setProject] = useState(null);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  useEffect(() => {
    api.get("/project/" + id)
      .then(res => res.data)
      .then(setProject)
      .catch(e => setError(formatError(e)));
  }, [id]);

  return (
    <Container>
      <Navbar />
      <main className="project">
        { (!project && !error) && <p>Loading...</p> }
        { error && <Error message={error} /> }
        { 
          project && (
            <>
              <header className="project-header">
                <h1 className="title">Project #{id}</h1>
                <p className="project-type">{project.type}</p>
              </header>
              <div className="project-tab-navigation">
                <nav className="tab-list">
                  {
                    tabs.map(tab => (
                      <Tab 
                        key={`tab-${tab}`}
                        className={activeTab === tab && "active-tab"} 
                        onClick={() => setActiveTab(tab)}
                      >{tab}</Tab>
                    ))
                  }
                </nav>
                <div className="tab-route">
                  { activeTab === "track" && <ProjectTrack projectId={id} track={project.track} /> }
                  { activeTab === "notes" && (
                    <div style={{ textAlign: "center" }}>
                      <p style={{ color: "gray", marginBottom: "1em" }}>No notes have been created yet</p>
                      <Button>Create one</Button>
                    </div>
                  )}
                </div>
              </div>
            </>
          ) 
        }
      </main>
    </Container>
  );

};

export default Project;