import { useContext } from 'react';
import { Col, Row, Tooltip } from 'antd';

import { ResourcesView } from './styles';
import ResourcesComponent from 'Components/ResourcesComponent';
import GameSessionState, { Resource } from 'GameSessionContext';

const ResourcesTable = () => {
  const { gameState } = useContext(GameSessionState);

  return (
    <ResourcesView>
      <Row gutter={[0, 0]} justify="space-evenly" align="middle">
        {Object.keys(gameState.resources).map((resource, idx) => (
          <Col key={idx}>
            <Tooltip title={`${Math.round(gameState.resourcesIncome[resource as Resource] * 100) / 100} / s`}>
              <>
                <ResourcesComponent
                  name={resource}
                  capacity={gameState.resourcesCapacity}
                  own={gameState.resources[resource as Resource]}
                  width={48}
                  height={48}
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
