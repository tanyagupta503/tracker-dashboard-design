import React from 'react';
import { Table, Button } from 'react-bootstrap';
import './Card2Table.css';
import chevronDown from '../../images/chevron-down.png';
import checkboxesNew from '../../images/checkboxes-new.png';
import slackPrivate from '../../images/slack-private.png';
import slackExternal from '../../images/slack-external.png';
import x from '../../images/x.png';

const Card2Table = () => {
  return (
    <div className='table-container'>
      <Table striped hover className='mb-0'>
        <thead>
          <tr>
            <th className='ms-3 checkbox-cell'>
              <img src={checkboxesNew} alt='checkboxesNew' />
            </th>
            <th>
              <div className='sorted-th ms-2'>
                Source
                <img src={chevronDown} alt='chevronDown' className='ms-2' />
              </div>
            </th>
            <th>
              <span>Sender</span>
            </th>
            <th>
              <span>Resolution</span>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='ms-3 checkbox-cell'>
              <img src={checkboxesNew} alt='checkboxesNew' />
            </td>
            <td>
              <b>Slack </b>
              <img
                src={slackPrivate}
                alt='slackPrivate'
                className='ms-2 me-1'
              />
              <span>internal-design</span>
            </td>
            <td>Ronald Richards</td>
            <td>In progress</td>
            <td className='btn-cell'>
              <Button size='lg' className='me-2'>
                <span>View details</span>
              </Button>
            </td>
          </tr>
          <tr>
            <td className='ms-3 checkbox-cell'>
              <img src={checkboxesNew} alt='checkboxesNew' />
            </td>
            <td>
              <b>Slack </b>
              <img
                src={slackPrivate}
                alt='slackPrivate'
                className='ms-2 me-1'
              />
              <span>internal-design</span>
            </td>
            <td>Wade Warren</td>
            <td>False positive</td>
            <td className='btn-cell'>
              <Button size='lg' className='me-2'>
                <span>View details</span>
              </Button>
            </td>
          </tr>
          <tr>
            <td className='ms-3 checkbox-cell'>
              <img src={checkboxesNew} alt='checkboxesNew' />
            </td>
            <td>
              <b>Slack </b>
              <img
                src={slackPrivate}
                alt='slackPrivate'
                className='ms-2 me-1'
              />
              <span>internal-design</span>
            </td>
            <td>Savannah Nguyen</td>
            <td>Deleted</td>
            <td className='btn-cell'>
              <Button size='lg' className='me-2'>
                <span>View details</span>
              </Button>
            </td>
          </tr>
          <tr>
            <td className='ms-3 checkbox-cell'>
              <img src={checkboxesNew} alt='checkboxesNew' />
            </td>
            <td>
              <b>Slack </b>
              <img
                src={slackPrivate}
                alt='slackPrivate'
                className='ms-2 me-1'
              />
              <span>internal-design</span>
            </td>
            <td>Bessie Cooper</td>
            <td>In progress</td>
            <td className='btn-cell'>
              <Button size='lg' className='me-2'>
                <span>View details</span>
              </Button>
            </td>
          </tr>
          <tr>
            <td className='ms-3 checkbox-cell'>
              <img src={checkboxesNew} alt='checkboxesNew' />
            </td>
            <td>
              <b>Slack </b>
              <span className='ms-2'>#general</span>
            </td>
            <td>Marvin McKinney</td>
            <td>Deleted</td>
            <td className='btn-cell'>
              <Button size='lg' className='me-2'>
                <span>View details</span>
              </Button>
            </td>
          </tr>
          <tr className='active'>
            <td className='ms-3 checkbox-cell'>
              <img src={checkboxesNew} alt='checkboxesNew' />
            </td>
            <td>
              <b>Slack </b>
              <span className='ms-2'>#external-design</span>
              <img src={slackExternal} alt='slackExternal' className='ms-1' />
            </td>
            <td>Leslie Alexander</td>
            <td>In progress</td>
            <td className='btn-cell'>
              <Button size='lg' className='me-2'>
                <span>Close</span>
                <img src={x} alt='x' />
              </Button>
            </td>
          </tr>
          <tr>
            <td className='ms-3 checkbox-cell'>
              <img src={checkboxesNew} alt='checkboxesNew' />
            </td>
            <td>
              <b>Slack </b>
              <span className='ms-2'>#external-design</span>
              <img src={slackExternal} alt='slackExternal' className='ms-1' />
            </td>
            <td>Brooklyn Simmons</td>
            <td>Deleted</td>
            <td className='btn-cell'>
              <Button size='lg' className='me-2'>
                <span>View details</span>
              </Button>
            </td>
          </tr>
          <tr>
            <td className='ms-3 checkbox-cell'>
              <img src={checkboxesNew} alt='checkboxesNew' />
            </td>
            <td>
              <b>Slack </b>
              <span className='ms-2'>#external-design</span>
              <img src={slackExternal} alt='slackExternal' className='ms-1' />
            </td>
            <td>Kathryn Murphy</td>
            <td>Deleted</td>
            <td className='btn-cell'>
              <Button size='lg' className='me-2'>
                <span>View details</span>
              </Button>
            </td>
          </tr>
          <tr>
            <td className='ms-3 checkbox-cell'>
              <img src={checkboxesNew} alt='checkboxesNew' />
            </td>
            <td>
              <b>Slack </b>
              <span className='ms-2'>#external-design</span>
              <img src={slackExternal} alt='slackExternal' className='ms-1' />
            </td>
            <td>Annette Black</td>
            <td>Deleted</td>
            <td className='btn-cell'>
              <Button size='lg' className='me-2'>
                <span>View details</span>
              </Button>
            </td>
          </tr>
          <tr>
            <td className='ms-3 checkbox-cell'>
              <img src={checkboxesNew} alt='checkboxesNew' />
            </td>
            <td>
              <b>Slack </b>
              <span className='ms-2'>#general</span>
            </td>
            <td>Jerome Bell</td>
            <td>False positive</td>
            <td className='btn-cell'>
              <Button size='lg' className='me-2'>
                <span>View details</span>
              </Button>
            </td>
          </tr>
          <tr>
            <td className='ms-3 checkbox-cell'>
              <img src={checkboxesNew} alt='checkboxesNew' />
            </td>
            <td>
              <b>Slack </b>
              <img
                src={slackPrivate}
                alt='slackPrivate'
                className='ms-2 me-1'
              />
              <span>internal-design</span>
            </td>
            <td>Devon Lane</td>
            <td>False positive</td>
            <td className='btn-cell'>
              <Button size='lg' className='me-2'>
                <span>View details</span>
              </Button>
            </td>
          </tr>
          <tr>
            <td className='ms-3 checkbox-cell'>
              <img src={checkboxesNew} alt='checkboxesNew' />
            </td>
            <td>
              <b>Slack </b>
              <span className='ms-2'>#general</span>
            </td>
            <td>Jacob Jones</td>
            <td>False positive</td>
            <td className='btn-cell'>
              <Button size='lg' className='me-2'>
                <span>View details</span>
              </Button>
            </td>
          </tr>
          <tr>
            <td className='ms-3 checkbox-cell'>
              <img src={checkboxesNew} alt='checkboxesNew' />
            </td>
            <td>
              <b>Slack </b>
              <img
                src={slackPrivate}
                alt='slackPrivate'
                className='ms-2 me-1'
              />
              <span>internal-design</span>
            </td>
            <td>Jenny Wilson</td>
            <td>Deleted</td>
            <td className='btn-cell'>
              <Button size='lg' className='me-2'>
                <span>View details</span>
              </Button>
            </td>
          </tr>
          <tr>
            <td className='ms-3 checkbox-cell'>
              <img src={checkboxesNew} alt='checkboxesNew' />
            </td>
            <td>
              <b>Slack </b>
              <img
                src={slackPrivate}
                alt='slackPrivate'
                className='ms-2 me-1'
              />
              <span>internal-design</span>
            </td>
            <td>Kristin Watson</td>
            <td>In progress</td>
            <td className='btn-cell'>
              <Button size='lg' className='me-2'>
                <span>View details</span>
              </Button>
            </td>
          </tr>
          <tr>
            <td className='ms-3 checkbox-cell'>
              <img src={checkboxesNew} alt='checkboxesNew' />
            </td>
            <td>
              <b>Slack </b>
              <img
                src={slackPrivate}
                alt='slackPrivate'
                className='ms-2 me-1'
              />
              <span>internal-design</span>
            </td>
            <td>Robert Fox</td>
            <td>In progress</td>
            <td className='btn-cell'>
              <Button size='lg' className='me-2'>
                <span>View details</span>
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Card2Table;
