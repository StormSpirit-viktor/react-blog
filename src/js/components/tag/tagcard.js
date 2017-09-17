import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import { COLOR_LABEL_BLOG, COLOR_LABEL_CATEGORY } from '../../constants/config';

export default class TagCard extends React.Component {
  constructor() {
    super();
    this.getTagSum = this.getTagSum.bind(this);
  }
  getTagSum(issues) {
    const tagList = [];
    const tagHash = {};
    for (let i = 0; i < issues.length; i += 1) {
      const labels = issues[i].labels;
      for (let j = 0; j < labels.length; j += 1) {
        if (labels[j].color !== COLOR_LABEL_BLOG && labels[j].color !== COLOR_LABEL_CATEGORY) {
          const tag = labels[j].name;
          if (tagHash[tag] === undefined) {
            tagHash[tag] = true;
            const tagTemp = { tag, sum: 1 };
            tagList.push(tagTemp);
          } else {
            for (let k = 0; k < tagList.length; k += 1) {
              if (tagList[k].tag === tag) {
                tagList[k].sum += 1;
              }
            }
          }
        }
      }
    }
    return tagList;
  }
  render() {
    const tagList = this.getTagSum(this.props.issues).sort((a, b) => b.sum - a.sum).map(
      item => <li key={item.tag}>{item.tag}<span>{item.sum}</span></li>);
    return (
      <div className="tag-rightsider">
        <div className="tag-rightsider-tagcard">
          <div className="tag-rightsider-tagcard-title"><Icon type="bars" /> 统计</div>
          <div className="tag-rightsider-tagcard-content">
            {tagList}
          </div>
        </div>
      </div>
    );
  }
}

TagCard.defaultProps = {
  issues: null,
};

TagCard.propTypes = {
  issues: PropTypes.array,
};
