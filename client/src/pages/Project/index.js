import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Error from '../../core/Error';
import ProjectTrack from '../../components/ProjectTrack';
import { useAPI } from '../../util/api';
import { Container, Tab } from './styles';

function Project({ cardInfo }){

  const { id } = useParams();

  const tabs = ["track", "notes"];

  const { data: project, loading, error, callback } = useAPI("GET", `/project/${id}`);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  useEffect(() => {
    callback()
  });

  return (
    <Container>
      <Navbar />
      <main className="project">
        { loading && <p>Loading...</p> }
        { error && <Error message={error} /> }
        { 
          project && (
            <>
              <header className="project-header">
                <h1 className="title">Project #{id}</h1>
                <p className="project-type">{project.type}</p>
              </header>
              <div className="project-tab-navigation">
                <p className="title">Tabs</p>
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
                  { activeTab === "track" && <ProjectTrack track={project.track} /> }
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