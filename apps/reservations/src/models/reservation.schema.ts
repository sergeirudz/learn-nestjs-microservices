import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  versionKey: false, // disable __v property on documents
})
export class ReservationDocument extends AbstractDocument {
  @Prop()
  timestamp: Date;
  @Prop()
  startDate: Date;
  @Prop()
  endDate: Date;
  @Prop()
  userId: string;
  @Prop()
  placeId: string;
  @Prop()
  invoice: string;
}

export const ReservationSchema =
  SchemaFactory.createForClass(ReservationDocument);
