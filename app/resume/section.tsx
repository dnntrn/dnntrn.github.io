import React from 'react';

type Props = {
    title: string;
    content: React.ReactNode;
}

const Section = ({ title, content } : Props) => {
  return (
    <section>
        <div className="flex mb-2">
          <h3 className="resume-subsection-title shrink pr-2">{title}</h3>
          <hr className="my-auto mx-0 grow border-[#737373]" />
        </div>
        <div className="resume-description">
            {content}
        </div>
    </section>
  )
}

export default Section