import { ReactElement } from "react";

interface Props {
  cardAmount: number;
  img: string;
  name: string;
  onClick: () => void;
}

const HeroTile = ({ cardAmount, img, name, onClick }: Props): ReactElement => {
  return (
    <div
      onClick={onClick}
      className={`
      w-[31%] h-[270px] md:w-[23%] lg:h-[300px] xl:h-[300px] xl:w-[15%]
      
      ${
        cardAmount !== 30 && "grayscale"
      } hover:scale-105 transition-all cursor-pointer flex justify-center items-end`}
      style={{ background: `url(${img}) center center / contain no-repeat` }}
    >
      <p className="belweBold text-white text-xl mb-[35%] w-1/2 text-center txt-shadow">
        {name}
      </p>
      {cardAmount !== 30 && (
        <p className="belweBold absolute text-white text-xl top-5 text-center txt-shadow">
          {cardAmount} / 30
        </p>
      )}
    </div>
  );
};

export default HeroTile;
