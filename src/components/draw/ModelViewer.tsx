import React from 'react';
import { modelObject } from '../../services/modelSvc';
interface ModelViewerProps {
  model: modelObject;
}
const ModelViewer: React.FC<ModelViewerProps> = ({ model }) => {
  return (
    <div className="">
      <p>JSON: </p>
      <pre className="border border-black text-sm w-1/3 bg-yellow-100">{JSON.stringify(model, null, 4)}</pre>
    </div>
  );
};

export default ModelViewer;
