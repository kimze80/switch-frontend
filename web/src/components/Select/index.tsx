import React, { useCallback, useState, useContext } from 'react';
import { Container, Button, Content } from './styles';
import selectUpIcon from '../../assets/select-up.svg';
import selectDownIcon from '../../assets/select-down.svg';
import checkIcon from '../../assets/check.svg';
import Checkbox from '../Checkbox';
import { SyncContext } from '../../context/SyncContext';
import { Contact } from '../../types/types';

interface SelectProps {
  data: Contact[];
}

const Select: React.FC<SelectProps> = ({ data }) => {
  const [expanded, setExpanded] = useState(false);
  const { selectedData, setSelectedData } = useContext(SyncContext);

  const handleClick = useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { checked, id, name } = e.target;

      if (!checked) {
        setSelectedData(selectedData.filter((item) => item.id !== id));
      }
      setSelectedData([
        ...selectedData,
        {
          id,
          name,
        },
      ]);
    },
    [selectedData, setSelectedData],
  );

  return (
    <Container
      expanded={expanded}
      data-testid={expanded ? 'select-expanded' : 'select-closed'}
    >
      <Button onClick={handleClick}>
        <img src={checkIcon} alt="" />
        All contacts
        <img src={expanded ? selectUpIcon : selectDownIcon} alt="" />
      </Button>
      <Content expanded={expanded}>
        {data ? (
          data.map((list) => (
            <Checkbox
              key={list.id}
              id={list.id}
              name={list.name}
              label={list.name}
              value={list.name}
              checked={selectedData.some((item) => item.id === list.id)}
              onChange={handleChange}
            />
          ))
        ) : (
          <span>No contacts available</span>
        )}
      </Content>
    </Container>
  );
};

export default Select;
