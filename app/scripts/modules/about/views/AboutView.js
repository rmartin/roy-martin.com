import template from './aboutView.hbs';

export default class AboutView extends Marionette.ItemView {
    get template() {
        return template;
    }
    get className() {
        return 'view-content';
    }
    get tagName(){
        return 'ul';
    }
    get regions() {
        return {
            strava: "#strava"
        }
    }
    onBeforeRender() {
        //add title and class
        $('#header-title').html('About');
        $('#header-sub-title').html('I am a developer, technical leader, entrepreneur and student of life.');
        $('#header-attribution').html('<a href="https://commons.wikimedia.org/wiki/File:Cirrus_Clounds.jpg#mediaviewer/File:Cirrus_Clounds.jpg" target="_blank" rel="nofollow">Cirrus Clounds</a> by <a href="//commons.wikimedia.org/wiki/User:Nissim_14" title="User:Nissim 14" target="_blank" rel="nofollow">Nissim Angdembay</a>')
        $('body').attr('class', '').addClass('experimentView');
    }

    onRender() {
        ga('send', 'pageview');
    }
}
