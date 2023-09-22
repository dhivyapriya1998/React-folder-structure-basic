import React, { useState } from 'react';

export default function Folder({ explorer }) {
  const [expand, setExpand] = useState(false);

  if (explorer.isFolder) {
    return (
      <div>
        <div onClick={() => setExpand(!expand)}>📁{explorer.name}</div>
        {explorer.items.map((item, idx) => {
          return (
            <div
              style={{
                paddingLeft: '25px',
                display: expand ? 'block' : 'none',
              }}
            >
              <Folder explorer={item} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return <span>🗒️{explorer.name}</span>;
  }
}
