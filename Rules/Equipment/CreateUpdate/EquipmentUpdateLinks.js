import CommonLibrary from '../../Common/Library/CommonLibrary';

export default function EquipmentUpdateLinks(context) {
    let links = [];

    let location = CommonLibrary.getControlProxy(context, 'LocationLstPkr').getValue();
    if (location.length || context.binding.Location_Nav) {
        let locationLink = context.createLinkSpecifierProxy(
            'Location_Nav',
            'Locations',
            '',
            location[0].ReturnValue,
        );
        links.push(locationLink.getSpecifier());
    }

    return links;
}
