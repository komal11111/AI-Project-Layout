import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Card, CardActionArea, Fab, IconButton } from "@material-ui/core";
import clsx from "clsx";
import styles from "./style";
// import AddIcon from "@material-ui/icons/Add";

const ActionCard = (props) => {
  const {
    actionAreaClassName,
    children,
    className,
    hasIcon,
    iconClassName,
    fsMasked,
    onClick,
    // primaryActionIcon,
    secondaryAction,
    style,
    to,
    zeroState,
    disabled,
    BottomContent,
  } = props;

  const classes = styles();
  const cardClasses = clsx(
    classes.actionCard,
    zeroState || disabled ? classes.zeroState : "",
    className
  );
  const actionAreaClasses = clsx(
    classes.actionArea,
    fsMasked ? classes.fsMasked : "",
    actionAreaClassName
  );
  const iconClasses = clsx(
    classes.icon,
    !secondaryAction ? classes.notClickable : "",
    iconClassName
  );
  const AdapterLink = React.forwardRef((linkProps, ref) => (
    <Link innerRef={ref} {...linkProps} />
  ));

  return (
    <Card className={cardClasses}>
      <CardActionArea
        className={actionAreaClasses}
        component={to && AdapterLink}
        to={to && to}
        onClick={onClick && onClick}
        style={style}
        disabled={disabled}
      >
        <div
          className={clsx(
            classes.buttonContainer,
            secondaryAction ? classes.withSecondaryAction : ""
          )}
        >
          <div className={classes.actionContainer}>{children}</div>
          {hasIcon && !secondaryAction && (
            <div className={classes.iconContainer}>
              <div className={iconClasses}>
                  {/* <AddIcon color="primary" /> */}
              </div>
            </div>
          )}
        </div>
      </CardActionArea>
      {secondaryAction && (
        <div className={classes.secondaryContainer}>{secondaryAction}</div>
      )}
      {BottomContent && (
        <>
          <div className={classes.bottomContainer}>{BottomContent}</div>
          <div className={classes.bottomContainer} />
        </>
      )}
    </Card>
  );
};

ActionCard.propTypes = {
  actionAreaClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  iconClassName: PropTypes.string,
  fsMasked: PropTypes.bool,
  hasIcon: PropTypes.bool,
  onClick: PropTypes.func,
  primaryActionIcon: PropTypes.string,
  secondaryAction: PropTypes.node,
  //   style: stylePropType,
  to: PropTypes.string,
  zeroState: PropTypes.bool,
  disabled: PropTypes.bool,
};

ActionCard.defaultProps = {
  actionAreaClassName: "",
  className: "",
  hasIcon: true,
  iconClassName: "",
  fsMasked: false,
  onClick: () => {},
  primaryActionIcon: "arrow-right",
  secondaryAction: null,
  style: undefined,
  to: undefined,
  zeroState: false,
  disabled: false,
};

export default ActionCard;
