import React from 'react'

function AlertElement(props) {
    const {cssClass,msgType,msgDetail} = props;
  return (
       
    <div className="container-fluid">
	<div className="row">
		<div className="col-md-12">
			<div className={cssClass}>
				 
                <strong>{msgType}</strong> {msgDetail}
               
			</div>
		</div>
	</div>
</div>

  )
};
export default AlertElement;
