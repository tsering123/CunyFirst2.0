const Sequelize = require('sequelize')
const Model = Sequelize.Model;

module.exports = function(sequelize) {

    class meetingInfo extends Model {}
    meetingInfo.init({

        days:{
            type: Sequelize.ARRAY(Sequelize.STRING),
            allowNull: false,
            validate:{
                notNull: true,           
                notEmpty: true
            }
        },
        startTime:{
            type:Sequelize.TIME,
            allowNull:false,
        },
        endTime:{
            type:Sequelize.TIME,
            allowNull:false,
        },
        instructor:{
            type:Sequelize.STRING,
            allowNull:false,
            validate:{
                notNull: true,            
                notEmpty: true
            }
        },
        room:{
            type:Sequelize.STRING,
            allowNull:false,
            validate:{
                notNull: true,            
                notEmpty: true
            }
        }


    },
        {sequelize,modelName: 'meetInfo',timestamps: false}
    );

    return meetingInfo
}