import { useContext } from 'react';

import { Col, Row, Tooltip } from 'antd';

import { ResourcesView } from './styles';
import ResourcesComponent from 'Components/ResourcesComponent';
import GameSessionState, { Resource } from 'GameSessionContext';

const ResourcesTable = () => {
  const { gameState } = useContext(GameSessionState);

  return (
    <ResourcesView>
      <Row>
        {Object.keys(gameState.resources).map((resource, idx) => (
          <Col key={idx} span={8}>
            <Tooltip
              title={`${Math.round(gameState.resourcesIncome[resource as Resource] * 100) / 100} ${resource} per second`}>
              <>
                <ResourcesComponent
                  name={resource}
                  capacity={gameState.resourcesCapacity}
                  own={gameState.resources[resource as Resource]}
                />
              </>
            </Tooltip>
          </Col>
        ))}
      </Row>
    </ResourcesView>
  );
};

export default ResourcesTable;
