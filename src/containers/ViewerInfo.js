import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import { withPlugins } from '../extend/withPlugins';
import { ViewerInfo } from '../components/ViewerInfo';
import { getCanvasLabel, getCanvases, getCanvasIndex } from '../state/selectors';

/**
 * mapStateToProps - to hook up connect
 * @memberof Window
 * @private
 */
const mapStateToProps = (state, props) => {
  const { windowId } = props;
  const canvases = getCanvases(state, { windowId });
  const canvasIndex = getCanvasIndex(state, { windowId });

  return {
    canvasCount: canvases.length,
    canvasIndex,
    canvasLabel: getCanvasLabel(state, {
      canvasIndex,
      windowId,
    }),
  };
};

const styles = {
  osdInfo: {
    order: 2,
    overflow: 'hidden',
    paddingBottom: 3,
    textOverflow: 'ellipsis',
    unicodeBidi: 'plaintext',
    whiteSpace: 'nowrap',
    width: '100%',
  },
};

const enhance = compose(
  withStyles(styles),
  withTranslation(),
  connect(mapStateToProps, null),
  withPlugins('ViewerInfo'),
);

export default enhance(ViewerInfo);
