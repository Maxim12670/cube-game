import './RenderDots.scss';

const RenderDots = (num: number) => {
  switch (num) {
    case 1:
      return (
        <div className="dot center"></div>
      );
    case 2:
      return (
        <>
          <div className="dot top-left"></div>
          <div className="dot bottom-right"></div>
        </>
      );
    case 3:
      return (
        <>
          <div className="dot top-left"></div>
          <div className="dot center"></div>
          <div className="dot bottom-right"></div>
        </>
      );
    case 4:
      return (
        <>
          <div className="dot top-left"></div>
          <div className="dot top-right"></div>
          <div className="dot bottom-left"></div>
          <div className="dot bottom-right"></div>
        </>
      );
    case 5:
      return (
        <>
          <div className="dot top-left"></div>
          <div className="dot top-right"></div>
          <div className="dot bottom-left"></div>
          <div className="dot bottom-right"></div>
          <div className="dot center"></div>
        </>
      );
    case 6:
      return (
        <>
          <div className="dot top-left"></div>
          <div className="dot top-center"></div>
          <div className="dot top-right"></div>
          <div className="dot bottom-left"></div>
          <div className="dot bottom-center"></div>
          <div className="dot bottom-right"></div>
        </>
      );
    default:
      return null;
  }
};

export default RenderDots;