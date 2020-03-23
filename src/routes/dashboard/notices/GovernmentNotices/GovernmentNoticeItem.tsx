import React, { FC } from 'react';

interface IGovernmentNoticeItemProps {
  url: string;
  title: string;
  category: string;
  date: string;
}

const GovernmentNoticeItem: FC<IGovernmentNoticeItemProps> = props => {
  const { url, title, category, date } = props;

  return (
    <li>
      <a href={url} className="p-3" target="_blank">
        <h5 className="notices__title">{title}</h5>
        <div className="notices__tag mr-3">
          <img src="/images/tag.svg" alt={'Tag'} />
          <span>{category}</span>
        </div>
        <div className="notices__date">
          <img src="/images/history.svg" alt={'History'} />
          <span>{date}</span>
        </div>
      </a>
    </li>
  );
};

export default GovernmentNoticeItem;
