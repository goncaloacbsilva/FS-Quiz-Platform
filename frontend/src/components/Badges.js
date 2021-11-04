import { Badge } from "@chakra-ui/react"


function StatusBadge(props) {
    if (props.used === 1) {
        return (<Badge fontSize={props.size} colorScheme="green">Used</Badge>);
    } else {
        return (<Badge fontSize={props.size} colorScheme="purple">Submited</Badge>);
    }   
}

function ReviewedBadge(props) {
    if (props.reviewed === 1) {
        return (<Badge fontSize={props.size} colorScheme="green">Reviewed</Badge>);
    } else {
        return (<Badge fontSize={props.size} colorScheme="red">Not reviewed</Badge>);
    }   
}

function ReviewedBadgeSimple(props) {
    if (props.reviewed === 1) {
        return (<Badge fontSize={props.size} colorScheme="green">Yes</Badge>);
    } else {
        return (<Badge fontSize={props.size} colorScheme="red">No</Badge>);
    }   
}

const Badges = {
    StatusBadge: StatusBadge,
    ReviewedBadge: ReviewedBadge,
    ReviewedBadgeSimple: ReviewedBadgeSimple,
}

export default Badges;