import { v4 as uuidV4 } from "uuid";
import Speciality from "../models/speciality";

const specialities = [
    {
        id: uuidV4(),
        type: 'ELECTRICAL'
    },
    {
        id: uuidV4(),
        type: 'PLUMBING'
    },
    {
        id: uuidV4(),
        type: 'EXCAVATION'
    },
];

const seedSpecialities = async () => {
    for (const spec of specialities) {
        let speciality = await Speciality.findOne({where: {type: spec.type}});
        if (!speciality) {
            await Speciality.create(spec);
        }
    }
}

export default seedSpecialities;